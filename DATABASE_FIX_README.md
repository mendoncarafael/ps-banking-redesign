# 🔧 ps-banking Database Fix for Large Amounts

## 🚨 Problem
You're encountering this error:
```
Out of range value for column 'amount' at row 1
Query: INSERT INTO ps_banking_transactions (identifier, description, type, amount, date, isIncome) VALUES (?, ?, ?, ?, NOW(), ?)
["R8RPQ149","Transação","bank",99997169959,true]
```

## 🔍 Root Cause
The database columns for `amount` in both `ps_banking_transactions` and `ps_banking_bills` tables are defined as `DECIMAL(10, 2)`, which can only store values up to **99,999,999.99** (about 100 million).

Your transaction amount of **99,997,169,959** (about 100 billion) exceeds this limit.

## ✅ Solution

### Step 1: Apply the Database Fix
Run the SQL commands in `ps-banking-fix.sql` on your database:

```sql
-- Fix ps_banking_transactions table
ALTER TABLE `ps_banking_transactions` 
MODIFY COLUMN `amount` DECIMAL(20, 2) NOT NULL;

-- Fix ps_banking_bills table  
ALTER TABLE `ps_banking_bills` 
MODIFY COLUMN `amount` DECIMAL(20, 2) NOT NULL;
```

### Step 2: Verify the Fix
After running the commands, verify the changes:

```sql
DESCRIBE `ps_banking_transactions`;
DESCRIBE `ps_banking_bills`;
```

You should see `amount` columns now show `decimal(20,2)` instead of `decimal(10,2)`.

## 📊 Data Type Comparison

| Data Type | Maximum Value | Suitable For |
|-----------|---------------|--------------|
| `DECIMAL(10, 2)` | 99,999,999.99 | ~100 Million |
| `DECIMAL(20, 2)` | 99,999,999,999,999,999.99 | ~100 Quintillion |

## 🎯 What This Fixes

✅ **Transaction logging** - Large deposits, withdrawals, and transfers  
✅ **Bill payments** - High-value bills and invoices  
✅ **Banking operations** - All money-related operations  
✅ **Future-proofing** - Handles even the largest possible amounts  

## 🔄 How to Apply

### Method 1: Direct SQL Execution
1. Open your database management tool (phpMyAdmin, HeidiSQL, etc.)
2. Select your server's database
3. Run the SQL commands from `ps-banking-fix.sql`

### Method 2: Command Line
```bash
mysql -u your_username -p your_database_name < ps-banking-fix.sql
```

### Method 3: FXServer Console
If your server supports it:
```
mysql-async execute "ALTER TABLE ps_banking_transactions MODIFY COLUMN amount DECIMAL(20, 2) NOT NULL;"
mysql-async execute "ALTER TABLE ps_banking_bills MODIFY COLUMN amount DECIMAL(20, 2) NOT NULL;"
```

## ⚠️ Important Notes

- **Backup First**: Always backup your database before making schema changes
- **No Data Loss**: This operation only changes the column type, existing data is preserved
- **Server Restart**: Restart your FXServer after applying the fix
- **Future Installations**: The main `ps-banking.sql` file has been updated to prevent this issue

## 🧪 Testing

After applying the fix, test with large amounts:
1. Try depositing/withdrawing large amounts
2. Create bills with high values
3. Transfer money between players
4. Check that transactions are logged properly

## 🆘 Troubleshooting

**If you still get errors:**
1. Verify the column types were actually changed
2. Check for any cached queries in your server
3. Restart your MySQL/MariaDB service
4. Ensure you applied the fix to the correct database

**If you need to rollback:**
```sql
ALTER TABLE `ps_banking_transactions` MODIFY COLUMN `amount` DECIMAL(10, 2) NOT NULL;
ALTER TABLE `ps_banking_bills` MODIFY COLUMN `amount` DECIMAL(10, 2) NOT NULL;
```

## 📞 Support

If you continue experiencing issues after applying this fix, please provide:
- Your database version (MySQL/MariaDB)
- The exact error message
- The result of `DESCRIBE ps_banking_transactions;` 
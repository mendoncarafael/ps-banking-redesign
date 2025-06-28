# ps-banking
Compatible with QBCore and ESX.

# Depedency
1. [qb-core](https://github.com/qbcore-framework/qb-core) or [ESX](https://github.com/esx-framework)
2. [ox_lib](https://github.com/overextended/ox_lib)

# Installation
* Download release files.
* Drag and drop resource into your server files.
* Start resource through server.cfg.
* Add the ps-banking sql file to your database.
* Restart your server.

## Exports

### Create Bill
```bash
    # Creates a bill invoice in the bank
    exports["ps-banking"]:createBill({
        identifier = "HVZ84591", -- citizen id
        description = "Utility Bill", 
        type = "Expense",
        amount = 150.00,
    })
```

# Features
### Overview Tab:
Includes all essential features such as managing your bills, withdrawing all money, depositing cash, transferring money weekly via Simmy, viewing the latest transactions, and handling unpaid invoices.
![image](https://cdn.discordapp.com/attachments/1081766623632949258/1388379912741720124/image.png?ex=6860c50e&is=685f738e&hm=a1752c1b47e272c60586855c456f3b15c9abf5edaa5fb79551fd1827ac874c8b&)

### Bills
Enables you to send and receive bills.
![image](https://cdn.discordapp.com/attachments/1081766623632949258/1388380376304582866/image.png?ex=6860c57c&is=685f73fc&hm=e1d7fb6e7e6869e4327a1a2e9d9f13c56a1e2f8dbe0f5423980702935ffb3063&)

### History
Displays a history of all transactions with options to delete specific transactions.
![image](https://cdn.discordapp.com/attachments/1081766623632949258/1388380433523408896/image.png?ex=6860c58a&is=685f740a&hm=62cb3e7ba04b9ec26025862ce681f148ca564e3b61f15eeb5f30ea14e261aab9&)

### Accounts
Allows you to create, add, or remove accounts, rename accounts, and perform deposits or withdrawals from specific accounts.
![image](https://cdn.discordapp.com/attachments/1081766623632949258/1388380574632251452/image.png?ex=6860c5ab&is=685f742b&hm=f7376fca94ab4d3d404c9ce729e47748e9f60244b0743e49b90f88eed4b866ea&)

### ATM Access
Deposit and withdraw from ATMs.
![image](https://cdn.discordapp.com/attachments/1081766623632949258/1388382644907151462/image.png?ex=6860c799&is=685f7619&hm=e291e94f1fdad3aed7ae53c551e3fad50c4079a77f9d5797a4d610aae12aed6d&)

# Credits
* [BachPB](https://github.com/BachPB)

---
slug: /
---

# Greeting

Welcome to the Traffy documentation! Here you will learn how to sell and buy traffic more effectively using our service.

## 1. Buying Traffic

After topping up your balance and creating an advertising campaign, the steps you take depend on the type of resource on which you want to receive traffic.  
To **implement the CPA model**, meaning to pay only for real visitors:

### [**Telegram Miniapp:**](buyer/script-installation)

- **Integration choice:** Send the Bot Token or [**install the script**](buyer/script-installation) that registers users.
- If you choose the script, you can upload your user database to avoid overlap.

### **Telegram Bot:**

- To obtain verified users, simply send the Bot Token.

### **Telegram Channel/Group:**

- Add the Traffy bot as an administrator to receive verified users.

## 2. Selling Traffic

When you create a resource in the seller section, you will receive a **Traffy Key** — a key for obtaining and verifying tasks, as well as for event registration. Further steps depend on the type of your resource.

### [**Telegram Miniapp:**](seller/preparation)

- Tasks are displayed through a [special script](seller/preparation) that requests and renders them.
- Your responsibilities:
    1. Integrate the script into the `<head>` section of your application.
    2. Define a location for displaying tasks.
    3. Style the tasks in test mode.
    4. Implement reward allocation for task completion.
    5. Verify functionality in production mode.

### **Telegram Bot:**

- After sending the Bot Token:
    1. Request tasks via our API.
    2. Display tasks within the bot.
    3. Verify task completions via the API.

> **Important:** The approach for the Telegram Bot does not work for the Telegram Miniapp!

Please select the appropriate section and follow the detailed instructions.
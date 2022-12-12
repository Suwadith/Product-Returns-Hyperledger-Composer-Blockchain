# Product-Returns-Hyperledger-Composer-Blockchain

This project demonstrates how a simple blockchain-based solution can maintain and handle the customer return process of huge supply chains such as Amazon and eBay.

## Logic

- The customer can update his/her personal details on the website. (Only the ID is passed onto the blockchain)

- Customer Initiates the return process through the website and provides a reason for the return request.

- Provided the return is possible then the Customer will be able to drop the product he/she wants to return at the nearest retail store with a retail store handler.

- The retail store handler has the task of then accepting the products returned by the customer. This includes the following use cases.
  1. Verifying if the returned product matches the initial request made by the user.
  2. Updating the store location info and the current return acceptance timestamp in the application.
  3. Sorting the returned products according to their respective categories.

- The retail store handler then contacts a third-party truck delivery company and provides info about pick up and drop off warehouse locations. This includes the following use cases.
  1. Updating the return acceptance timestamp on the application.
  2. Separating packages according to their fragility level to avoid any damages.

- The truck driver then delivers the return packages to the Warehouse of the original company where the customer initially made his order with. A warehouse manager will be handling this process. This includes the following use cases.
  1. Verifying the returned product’s integrity and collecting the details.
  2. Conducting a proper evaluation of the return reason and validating the request on the application.
  3. Updating the warehouse location and the current return acceptance timestamp on the application.

- Finally, the return package is sent back to the original supplier and then the delivery information is updated on the application.

## Assumptions & Explanations

- The idea is to have boundaries and restrictions between different actors involved in the system when accessing various resources and functions.
- This involves multiple transactions where the asset/product is being dropped of between different actors starting from a customer to the end supplier.
- With the use of ACL,
  1. Every different actor to view their personal information.
    - E.g:- Customers being able to view only their personal information
  2. Has access to view the details of the person who is next in the chain to receive the product/asset.
    - E.g: Customers being able to view all retail store handler details.
  3. Every actor can update and modify asset data such as location, and timestamp during a handoff. (Except for the supplier as the chain ends at his end.)
    - E.g: Customers being able to update handoff location and timestamp of the asset when dropping the product with the store handler.
  4. Has the ability to view the product they own and its status and also the asset will be visible to the person with whom the product currently resides.
    - E.g:- Customer can view the product/asset he owns and also the warehouse manager can see the product after he receives the product from the customer.

> Note: This program was developed as part of an assessment given by the Middlesex University

## Use case diagram

![image](https://user-images.githubusercontent.com/20539850/207112381-0ddb9de0-0c99-43a5-96fe-a5ef749602f5.png)

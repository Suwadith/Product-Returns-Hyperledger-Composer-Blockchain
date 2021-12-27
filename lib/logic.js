var NS = 'org.blkreturns.net';

/*
* Used to initialise the blockchain with some dummy(sample) data
* @param {org.blkreturns.net.InitialiseAll} no param
* @transaction
*/     
async function initialiseAll() {

    var factory = getFactory();

    //create customers
    let customerIds = ['C1', 'C2'];
    let customerFirstNames = ['Tom', 'Tobey']
    let customerLastNames = ['Holland', 'Maguire']
    let customerBuildingNumbers = ['6', '7'];
    let customerStreetNames = ['Baker Street', 'Bond Street'];
    let customerPostalCodes = ['HA8 8BT', 'W2 6LS'];
    let customerCounties = ['Middlesex', 'Westminster'];
    let customerMobiles = ['0754654123', '0789564865'];
    let customerDOBs = [new Date('1997-05-11T00:00:00.000Z'), new Date('1977-05-11T00:00:00.000Z')];

    let customers = new Array();

    for(let i=0; i<customerIds.length; i++) {

        let newCustomer = factory.newResource(NS, 'Customer', customerIds[i]);

        let newCustomerName = factory.newConcept(NS, 'Name');
        newCustomerName.firstName = customerFirstNames[i];
        newCustomerName.lastName = customerLastNames[i];

        let newCustomerAddress = factory.newConcept(NS, 'Address');
        newCustomerAddress.buildingNumber = customerBuildingNumbers[i];
        newCustomerAddress.streetName = customerStreetNames[i];
        newCustomerAddress.postalCode = customerPostalCodes[i];
        newCustomerAddress.county = customerCounties[i];

        newCustomer.name = newCustomerName;
        newCustomer.address = newCustomerAddress;
        newCustomer.mobileNo = customerMobiles[i];
        newCustomer.dateOfBirth = customerDOBs[i];

        customers.push(newCustomer);
    }


    //create retail store handler
    let retailStoreHandlers = new Array();

    let newRetailStoreHandler = factory.newResource(NS, 'RetailStoreHandler', 'R1');

    let newRetailStoreHandlerName = factory.newConcept(NS, 'Name');
    newRetailStoreHandlerName.firstName = 'John';
    newRetailStoreHandlerName.lastName = 'Smith';

    let newRetailStoreHandlerAddress = factory.newConcept(NS, 'Address');
    newRetailStoreHandlerAddress.buildingNumber = '124';
    newRetailStoreHandlerAddress.streetName = 'Queensway';
    newRetailStoreHandlerAddress.postalCode = 'H48 7DB';
    newRetailStoreHandlerAddress.county = 'Southampton';

    newRetailStoreHandler.name = newRetailStoreHandlerName;
    newRetailStoreHandler.retailStoreAddress = newRetailStoreHandlerAddress;
    newRetailStoreHandler.retailStoreName = 'Tesco Express';

    retailStoreHandlers.push(newRetailStoreHandler);


    //create Truck driver
    let truckDrivers = new Array();

    let newTruckDriver = factory.newResource(NS, 'TruckDriver', 'T1');

    let newTruckDriverName = factory.newConcept(NS, 'Name');
    newTruckDriverName.firstName = 'Jason';
    newTruckDriverName.lastName = 'Statham';

    let newTruckCompanyAddress = factory.newConcept(NS, 'Address');
    newTruckCompanyAddress.buildingNumber = '512';
    newTruckCompanyAddress.streetName = 'Usher Lane';
    newTruckCompanyAddress.postalCode = 'JK6 7AW';
    newTruckCompanyAddress.county = 'Liverpool';

    newTruckDriver.name = newTruckDriverName;
    newTruckDriver.truckCompanyAddress = newTruckCompanyAddress;
    newTruckDriver.trcukCompanyName = 'Fed Ex';

    truckDrivers.push(newTruckDriver);



    //create warehouse manager
    let warehouseManagers = new Array();

    let newWarehouseManager = factory.newResource(NS, 'WarehouseManager', 'W1');

    let newWarehouseManagerName = factory.newConcept(NS, 'Name');
    newWarehouseManagerName.firstName = 'Mark';
    newWarehouseManagerName.lastName = 'Wahlberg';

    let newWarehouseAddress = factory.newConcept(NS, 'Address');
    newWarehouseAddress.buildingNumber = '600';
    newWarehouseAddress.streetName = 'Sheriff Lane';
    newWarehouseAddress.postalCode = 'PK7 7NS';
    newWarehouseAddress.county = 'Manchester';

    newWarehouseManager.name = newWarehouseManagerName;
    newWarehouseManager.warehouseAddress = newWarehouseAddress;

    warehouseManagers.push(newWarehouseManager);



    //create supplier
    let suppliers = new Array();

    let newSupplier = factory.newResource(NS, 'Supplier', 'S1');

    let newSupplierName = factory.newConcept(NS, 'Name');
    newSupplierName.firstName = 'Kevin';
    newSupplierName.lastName = 'Feige';

    let newProductionAddress = factory.newConcept(NS, 'Address');
    newProductionAddress.buildingNumber = '400';
    newProductionAddress.streetName = 'Wembley Street';
    newProductionAddress.postalCode = 'NS4 4BT';
    newProductionAddress.county = 'Wembley';

    newSupplier.name = newSupplierName;
    newSupplier.productionAddress = newProductionAddress;

    suppliers.push(newSupplier);



    //create products
    let productIds = ['1000', '1001'];
    let saleIds = ['SA1', 'SA2'];
    let productNames = ['Dell XPS 15 9510', 'M1 MacBook Air 13'];
    let categories = ['Electronics', 'Electronics'];
    let prices = [1799.00, 899.00];
    let returnReasons = ['DAMAGED', 'REFUND'];
    let currentOwners = ['CUSTOMER', 'CUSTOMER'];
    let purchaseTimeStamps = [new Date('2021-12-24T05:35:45.200Z'), new Date('2021-12-20T10:40:16.287Z')];
    let returnReasonValidations = ['PENDING', 'PENDING'];

    let products = new Array();

    for(let i=0; i<productIds.length; i++) {
        let newProduct = factory.newResource(NS, 'Product', saleIds[i]);
        newProduct.productId = productIds[i];
        newProduct.name = productNames[i];
        newProduct.category = categories[i];
        newProduct.price = prices[i];
        newProduct.customer = factory.newRelationship(NS, 'Customer', customerIds[i]);
        newProduct.returnReason = returnReasons[i];
        newProduct.currentOwner = currentOwners[i];
        newProduct.handoffLocationHistory = new Array();
        newProduct.handoffTimestampHistory = new Array();
        newProduct.purchaseTimestamp = purchaseTimeStamps[i];
        newProduct.returnReasonValidation = returnReasonValidations[i];

        products.push(newProduct);
    }


    let customerRegistry = await getParticipantRegistry(NS + '.Customer');
    await customerRegistry.addAll(customers);

    let retailStoreHandlerRegistry = await getParticipantRegistry(NS + '.RetailStoreHandler');
    await retailStoreHandlerRegistry.addAll(retailStoreHandlers);

    let truckDriverRegistry = await getParticipantRegistry(NS + '.TruckDriver');
    await truckDriverRegistry.addAll(truckDrivers);

    let warehouseManagerRegistry = await getParticipantRegistry(NS + '.WarehouseManager');
    await warehouseManagerRegistry.addAll(warehouseManagers);

    let supplierRegistry = await getParticipantRegistry(NS + '.Supplier');
    await supplierRegistry.addAll(suppliers);

    let productRegistry = await getAssetRegistry(NS + '.Product');
    await productRegistry.addAll(products);
    
}


/*
* customer dropping the product with the retail store handler
* @param {org.blkreturns.net.CustomerHandOff} no params
* @transaction
*/  
async function customerHandOff(tx) {
    tx.product.retailStoreHandler = tx.retailStoreHandler
    tx.product.currentOwner = 'RETAIL';
    tx.product.handoffLocationHistory.push(tx.retailStoreHandler.retailStoreAddress);
    tx.product.handoffTimestampHistory.push(new Date());

    let productRegistry = await getAssetRegistry(NS + '.Product');
    await productRegistry.update(tx.product);
}

/*
* retailer dropping the product with the truck driver
* @param {org.blkreturns.net.RetailerHandOff} no params
* @transaction
*/  
async function retailerHandOff(tx) {
    tx.product.truckDriver = tx.truckDriver
    tx.product.currentOwner = 'TRUCK';
    tx.product.handoffLocationHistory.push(tx.truckDriver.truckCompanyAddress);
    tx.product.handoffTimestampHistory.push(new Date());

    let productRegistry = await getAssetRegistry(NS + '.Product');
    await productRegistry.update(tx.product);
}

/*
* driver dropping the product with the warehouse manager
* @param {org.blkreturns.net.DriverHandOff} no params
* @transaction
*/  
async function driverHandOff(tx) {
    tx.product.warehouseManager = tx.warehouseManager
    tx.product.currentOwner = 'WAREHOUSE';
    tx.product.handoffLocationHistory.push(tx.warehouseManager.warehouseAddress);
    tx.product.handoffTimestampHistory.push(new Date());

    let productRegistry = await getAssetRegistry(NS + '.Product');
    await productRegistry.update(tx.product);
}

/*
* manager dropping the product with the supplier
* @param {org.blkreturns.net.ManagerHandOff} no params
* @transaction
*/  
async function managerHandOff(tx) {
    tx.product.supplier = tx.supplier
    tx.product.currentOwner = 'SUPPLIER';
    tx.product.returnReasonValidation = 'ACCEPTED';
    tx.product.handoffLocationHistory.push(tx.supplier.productionAddress);
    tx.product.handoffTimestampHistory.push(new Date());

    let productRegistry = await getAssetRegistry(NS + '.Product');
    await productRegistry.update(tx.product);
}
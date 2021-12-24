var NS = 'org.blkreturns.net';

/*
* Used to initialise the blockchain with some dummy(sample) data
* @param {org.blkreturns.net.InitialiseAll} no param
* @transaction
*/     
async function initialiseAll() {

    var factory = getFactory();

    //create customers
    let customerIds = ['1', '2'];
    let customerFirstNames = ['Tom', 'Tobey']
    let customerLastNames = ['Holland', 'Maguire']
    let customerBuildingNumbers = ['6', '7'];
    let customerStreetNames = ['Baker Street', 'Bond Street'];
    let customerPostalCodes = ['HA8 8BT', 'W2 6LS'];
    let customerCounties = ['Middlesex', 'Westminster'];
    let customerMobiles = ['0754654123', '0789564865'];
    let customerDOBs = ['1997-05-11T00:00:00.000Z', '1977-05-11T00:00:00.000Z'];

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

    let customerRegistry = await getParticipantRegistry(NS + '.Customer');
    await customerRegistry.addAll(customers);


    //create retail store handlers
    
    //create Truck drivers

    //create warehouse managers

    //create suppliers

    //create products

    

}
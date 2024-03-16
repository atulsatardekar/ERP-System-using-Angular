# ERRPSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files. 

Welcome to the ERP System Frontend Application! This Angular-based application provides a user-friendly interface for managing various aspects of your enterprise resources.

Prerequisites

Before running the application, ensure that you have the following prerequisites installed on your system:

Node.js: Download and Install Node.js
npm (Node Package Manager): Comes bundled with Node.js installation
then install angular with command npm install -g @angular/cli
Running the Application

Once the installation is complete, you can run the application locally. Follow these steps:

Start the JSON Server to serve mock data for the application. This step is crucial as  data resides inside the JSON Server:

with command npm run json:server

Start the Angular development server:

with command ng serve

Once the development server is up and running, open your preferred web browser and navigate to http://localhost:4200/



output images = ![IMG_4109](https://github.com/atulsatardekar/atulsatardekar/assets/133082140/a701e508-804f-4175-bc0c-4096bdc816ce)

 After clicking on the 'ERP System' dashboard, users are directed to the home component where product data is displayed. Products are categorized accordingly, and clicking on a category, such as 'Mobile,' will render only mobile products, with similar functionality for other product categories.

![IMG_4112](https://github.com/atulsatardekar/atulsatardekar/assets/133082140/33ecb8c9-e98b-45a0-8d1c-335e82a038f3)

When a user clicks on a product, they will be redirected to the product component where mock data is displayed. Within this mock data, users can edit and delete existing entries. To add new data, users need to click on the 'New' button, which will open a side panel. From there, users can input and update card data as needed 

![IMG_4113](https://github.com/atulsatardekar/atulsatardekar/assets/133082140/6c9f3f7e-b2fe-4f60-96a5-6a005f38412a).
When a user clicks on the cart icon, they are directed to the order component, where a list of orders is displayed. This list includes details such as order ID, customer name, order date, and status, utilizing mock data. Users have the capability to edit, update, and delete order statuses by clicking on the respective icons. and also implemented Angular's Full Calendar module is utilized to implement a calendar view showcasing orders scheduled for their expected delivery dates.
![IMG_4114](https://github.com/atulsatardekar/atulsatardekar/assets/133082140/3c592bfb-6674-41ad-bf98-9e7dc5701740)
Finally, I have developed an additional feature where users can create an account by clicking on the user icon. With this account, users can perform operations, and we can also implement features such as restricting access to certain features for users who haven't signed up for the app or don't have a user ID.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

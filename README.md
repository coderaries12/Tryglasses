# Tryglasses
      
Tryglasses is an e-commerce website for all types of eyewears.It is a soft clone of GlassesUSA.com. 

Check out [Tryglasses](https://tryglasses.onrender.com/) 

## Index

[MVP Feature List](https://github.com/coderaries12/GlassesUSAclone/wiki) |
[Database Scheme](https://github.com/coderaries12/GlassesUSAclone/wiki/Database-Schema) |
[User Stories](https://github.com/coderaries12/GlassesUSAclone/wiki/User-Stories) |
[Wire Frames](https://github.com/coderaries12/GlassesUSAclone/wiki/Wireframes) |

## Technologies Used

<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" /><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" /><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" /><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />

## Splash Page
![ezgif com-video-to-gif (1)](https://github.com/coderaries12/GlassesUSAclone/assets/30429957/3fbf154b-9166-45df-8e35-bdb2128baee0)


## Eyeglasses Page
![product-list-sunglasses](https://github.com/coderaries12/GlassesUSAclone/assets/30429957/24df12f5-3d9f-4b3f-93d6-57b1a83f49ec)


## Eyeglass detail page and reviews
![product-list](https://github.com/coderaries12/GlassesUSAclone/assets/30429957/832b3a46-1a41-4251-817e-d4959b34ae87)


## Shopping cart Page
![shopping-cart](https://github.com/coderaries12/GlassesUSAclone/assets/30429957/edfb39a7-d0e5-4268-b4dd-150246692080)


## Favorite Page
![favorite-page](https://github.com/coderaries12/GlassesUSAclone/assets/30429957/f360553e-ba49-4afe-af1a-30ed40dd4277)


## Order Page
![ezgif com-video-to-gif (1)](https://github.com/coderaries12/GlassesUSAclone/assets/30429957/dcd029a9-dfef-4b7f-9edf-9a589c95dd86)


## Search Bar
![search-bar-tryglasses](https://github.com/coderaries12/GlassesUSAclone/assets/30429957/d5630cc3-1c37-4dd6-8df9-a2e078b57af9)



## Getting started
1. Clone this repository:

   `
   https://github.com/coderaries12/GlassesUSAclone.git
   `
2. Install dependencies into the Backed and the Frontend by making a terminal for each one and then run the following:

   * `npm install`

3. Create a **.env** file using the **.envexample** provided 

4. Set up your database with information from your .env and then run the following to create your database, migrate, and seed: 
 
   * `npx dotenv sequelize db:create`
   * `npx dotenv sequelize db:migrate` 
   * `npx dotenv sequelize db:seed:all`

5. Start the app for both backend and frontend using:

   * `npm start`

6. Now you can use the Demo User or Create an account

# Features 

## Products
* Product are listed in form of two categories one is eyeglasses and other one is sunglasses

## Reviews
* Users can create Reviews on Product 
* Users can read/view all of the Reviews on a Product
* Users can delete their Review(s) on a Product

## Shopping Cart
Logged-in Users can
* Add a product at a shopping cart
* Update the quantity of the product
* List all products in there shopping cart
* Delete/Cancel individual product

## Order
Logged-in Users can
* Place a order
* Update the shipping address in order
* List all orders of logged-in users in purchase history page
* Delete/Cancel individual order if order is in preparing state
  
## Favorite Cart
Logged-in Users can
* Add a product to its favorite collection by clicking heart icon on images
* List all of their favorite products
* Unlike their favorite products by clicking hear icon on images

## Search Bar
Logged-in Users can
* Can search any product by typing in search bar and by clicking the product can go to product detail page


## Future Features
* More categories in terms of gender and brands
* Live try-on camera
  

## Endpoints
| Request | Purpose | Return Value 
--------- | ------- | ----------- 
GET /api/auth/ | Fetches the current logged in user or returns null | { id: int, username: STRING, email: STRING } |
POST /api/auth/login | Logs in user | { id: INT, username: STRING, email: STRING } |
GET /api/auth/logout | Logsout user | {'message': 'User logged out'} |
POST /api/auth/signup | Signs up user | { id: INT, username: STRING, email: STRING } |
GET /api/eyeglasses | Get all eyeglasses collection | { id: INT, title: STRING, price: INT} |
GET /api/sunglasses | Get all sunglasses collection | { id: INT, title: STRING, price: INT} |
GET /api/products/:productId | Get individual detail of Product | { id: INT, userId: INT, title: STRING, price: INT, size: STRING, frameType: STRING, frameColor: STRING, frameMaterial: STRING, frameShape: STRING, previewImage: STRING, images: ARRAY, user: OBJECT, reviews: ARRAY, Description: STRING, type: STRING } |
POST /api/products/:productId/reviews | create a review for a listing | { id: INT, productId: INT, userId: INT, reviewTitle: STRING, quality: STRING, fit: STRING, style: STRING, review: STRING, stars: INT, reviewImage: STRING }
PUT /api/products/:productId/reviews/:reviewId | update a review | { id: INT, productId: INT, userId: INT, reviewTitle: STRING, quality: STRING, fit: STRING, style: STRING, review: STRING, stars: INT, reviewImage: STRING  }
DELETE /api/products/:productId/reviews/:reviewId | delete a review | { "message": "Review succesfully deleted" }
GET /api/favorites | Listing of favorite items of a user | { user_id: INT, product_id: INT, title: STRING, description: STRING, frameType: STRING, price: INT, previewImages: STRING, size: STRING, type: STRING,  }
POST /api/users/:userId/favorites/products/:productId | Add the product to favorite collection | { id: INT, username: STRING, email: STRING, user_favorites: ARRAY }
DELETE /api/users/:userId/favorites/products/:productId  | Remove the product from favorite | { id: INT, username: STRING, email: STRING, user_favorites: ARRAY  }
GET /api/shoppingcart | Listing of items to shopping cart page | { userId: INT, productId: INT, title: STRING, description: STRING, frameType: STRING, price: INT, previewImages: STRING, size: STRING, type: STRING,  }
POST /api/users/userId/cart/products/:productId/:value | Add the product to shopping cart | { sessionId:userId, productId: INT, quantity: INT }
PUT /api/users/userId/cart/products/:productId/:cartId/:value | Edit the quantity of the product to shopping cart | {sessionId:userId, productId: INT, quantity: INT}
DELETE /api/users/userId/cart/products/:productId/:cartId/:value | Delete the product from shopping cart | {sessionId:userId, productId: INT, quantity: INT }
POST /api/orders/new | Place the order | { id: INT, fullname: STRING, email: STRING, phone:INT,city: STRING, state: STRING  }
GET /api/orders/:orderId | Listing of cart items to order review page | { cart_items: ARRAY, title: STRING, price: INT, previewImages: STRING  }
PUT /api/orders/:orderId | Edit the shipping address to order | {orderId:INT, fullname: STRING, email: STRING, phone:INT,city: STRING, state: STRING }
DELETE /api/orders/:orderId | Delete the order from purchase history page | {orderId:INT }
GET /api/purchase-history | Listing of all orders placed by logged-in user | { order_number: INT, order_date: INT, order_status: STRING, title: INT, previewImages: STRING, price: INT  }






            



   










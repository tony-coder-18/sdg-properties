# SDG Properties

# Technologies:

- Node JS v16.15.0
- Express (Framework)
- Open API (Style guide)
- Swagger UI Express (Documentation)
- Sequelize (ORM)
- Jest and Supertest (Unit Testing)

# Development Approach

I will develop the api using a **3 layer architecture**:

- **Controller** for handling requests and responses for the endpoints. Above this layer it will be placed a Router.
- **Service Layer** for the business logic
- **Data Access Layer** for working with the Database

# Endpoints
## Query Service
- GET `/api/v1/presale`
- GET `/api/v1/forsale`
- GET `/api/v1/sold`

Users can filter by:
- **Year of construction**

    With the key "year"
    - E.g. ?year=2023
- **City**

    With the key "city"
    - E.g. ?city=Random%20City
- **State**

    With the key "state"
    The 3 options are: **pre-venta**, **en-venta** y **vendido**
    - E.g. ?state=pre-venta

# Questions

- Should I make a endpoint for getting all the properties?

R/= No, because in the task description it says "properties with different states should never be visible by the user". 

- Should I make endpoints for getting a specific property with its id?

R/= No, it's not necessary.
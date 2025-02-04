# Phonebook Application

This is a simple phonebook application built with Node.js and Express. It allows you to manage a list of contacts with their phone numbers and other details.

## Features

- **Get all phones**: Retrieve the list of all phone contacts.
- **Get a phone by ID**: Retrieve a specific phone contact by its ID.
- **Add a new phone**: Add a new phone contact to the list.
- **Update a phone**: Update the details of an existing phone contact.
- **Delete a phone**: Delete a phone contact from the list.

## Endpoints

### Get all phones

- **URL**: `/api/v1/phones`
- **Method**: `GET`
- **Description**: Retrieves the list of all phone contacts.

### Get a phone by ID

- **URL**: `/api/v1/get-phone/:id`
- **Method**: `GET`
- **Description**: Retrieves a specific phone contact by its ID.
- **URL Parameters**: `id` - The ID of the phone contact.

### Add a new phone

- **URL**: `/api/v1/new-phone`
- **Method**: `POST`
- **Description**: Adds a new phone contact to the list.
- **Request Body**: JSON object containing the details of the new phone contact.

### Update a phone

- **URL**: `/api/v1/update-phone/:id`
- **Method**: `PATCH`
- **Description**: Updates the details of an existing phone contact.
- **URL Parameters**: `id` - The ID of the phone contact.
- **Request Body**: JSON object containing the updated details of the phone contact.

### Delete a phone

- **URL**: `/api/v1/delete-phone/:id`
- **Method**: `DELETE`
- **Description**: Deletes a phone contact from the list.
- **URL Parameters**: `id` - The ID of the phone contact.

## Installation

1. Clone the repository:
   
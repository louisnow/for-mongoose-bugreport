Default values are not populated for single nested subdocuments.
However they do get updated for mongoose arrays

To run code, first set the connection string in the `.env` file

```
npm install
npm start
```

![Image](../master/image.png?raw=true)

This works in Mongoose <=5.4.19
To verify

```
npm install mongoose@5.4.19
npm start
```

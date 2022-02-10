# Qlue

## Shell

1) Create a single line script that returns the number of httpd processes that are running on the current machine.
2) Open a terminal and type:
-   ```
    #$ cd /tmp
    ```
-   ```
    #$ mkdir -p mig33/inner.folder
    ```
-   ```
    #$ touch mig33/inner.folder/1.txt
    ```
-   ```
    # nano mig33/inner.folder/1.txt
    ```
-   ```
    #$ write “Green Mango Orange Mango”
    ```
3) From the current folder (/tmp), provide some bash commands that will change all the “Mango” words into “Apple” in 1.txt file.

## SQL

(Postgresql) Given the table below:

```Sql
create table persons(
    id integer primary key,
    name varchar(200) );

create table items(
    id integer primary key,
    name varchar(200),
    price varchar(10) );

create table transactions(
    id integer primary key,
    person_id integer,
    item_id integer,
    total integer,
    date timestamp,, FOREIGN KEY(person_id)
    REFERENCES persons(id), FOREIGN KEY(item_id)
    REFERENCES items(id)
);
```

1) Provide a query select statement to return the following result structure:
    - name; total_price
    - Where name is the name of “persons” and total_price is the total of price from the items transaction completed by the person.
2) Provide a query select statement to return the transaction complete with name of person, and name of item between January 1st, 2020 and June 25th, 2020.
3) Provide a query select statement to return a list of the name of the person who made transactions based on the total variety of items purchased, sorted from the most to the fewest.

## NodeJS, Python, Golang, or PHP

Write a function which, taking in a positive integer n as input, returns a string “CIRCLE” if the n is divisible by 2, a string “STAR” if the n is divisible by 3, a string “CIRCLE STAR” if n is divisible by 2 and 3, and return null if n is divisible by neither 2 and 3.

### sample expected output: 

```js
getShape(5); // ⇒ Null

getShape(6); // ⇒ CIRCLE STAR

getShape(9); // ⇒ STAR
```

## JavaScript

We have a data service returning json data from another server (Server to Server), you get json-encoded as:

```json
[ 
    {
        "username":"ali",
        "hair_color":"brown",
        "height":1.2
    },
    {
        "username":"ma rc",
        "hair_color":"blue",
        "height":1.4
    },
    {
        "username":"joe",
        "hair_color": "brown",
        "height":1.7
    },
    {
        "username":"zehua",
        "hair_color":"black",
        "heigh t": 1.8
    }
]
```

In an effort to reduce transfer size, we want to transfer the data in the following json format instead:

```json
{
    "h":["username","hair_color","height"],
    "d":[
            ["ali","brown",1.2],
            ["ma rc","blue",1.4],
            ["joe","brown",1.7],
            ["zehua","black",1.8]
        ]
}
```

### Assignments:
1) Write the NodeJS function which, taking in a raw data set as first mentioned, will return the improved json-encoded string and expose it into standard RESTFul API
Notes:
1) it can be assumed that all records in the initial JSON result set have the same fields, and that said fields are indexed in the same order.
2) make your functions generic (where the field names of the records in the resultset are not known in advance)

##  Algorithmic

In the language of your choice, write a function which, taking a positive integer n as input, finds all sets of numbers that sum up to n.

For example, n=4, we have: 4 
- 3,1
- 2,2
- 2,1,1
- 1,1,1,1

Note that 2,1,1 is same as 1,2,1 or 1,1,2.

## Bonus: Parallel and Concurrency

Please explain Parallel and Concurrency to non-technical person, without technical terms. 
Let’s say you explain to non-developers. 

Tips, you can use diagrams, pictures, or story as long as non-technical persons understand.


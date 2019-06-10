create database bamazon_db;

use bamazon_db;

create table products(
	item_id int auto_increment primary key,
    product_name varchar(50) not null,
    department_name varchar(50) not null,
    price decimal(10,2) not null,
    stock_quantity int(10) not null
);


insert into products(product_name, department_name, price, stock_quantity)
values('Reusable Straws', 'Home', 10, 20),
('Smart Television', 'Home', 500, 10),
('MacBook Pro', 'Electronic', 1000, 10),
('Makeup', 'Beauty', 20, 10),
('Pre-Workout Supplement', 'Health', 50, 30),
('Nintendo Switch', 'Electronic', 300, 10),
('Bose Over-the-ear Headphones (Noise Cancellation)', 'Electronic', 350, 5),
('Apple Watch (Series 3)', 'Electronic', 300, 5),
('HP All-In-One Printer', 'Electronic', 100, 3),
('Texas Instrument Calculator', 'Electronic', 120, 4);

select * from products;



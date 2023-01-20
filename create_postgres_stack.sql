CREATE DATABASE geo7630;
\c geo7630
CREATE schema geo7630;
-- SET search_path TO vdm;
CREATE USER geo7630_reader password 'motdepasse';
GRANT USAGE ON geo7630 vdm TO geo7630_reader;
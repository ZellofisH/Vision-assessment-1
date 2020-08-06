import React, { Component } from 'react'
import product from './product.json';


product.sort((a, b) => a.product_type > b.product_type ? 1 : -1)
console.log(product);

export class product_item extends Component {
    render() {
        return (
            <div>
                <h1>Connection Card</h1>
                {product.filter(function(data) {
                    if (data.product_type === "Connection Card") {
                        return true;
                    }
                    return false;
                }).map((e, i) => <div key = {i}>{e.name} ${e.adjusted_price != null && e.adjusted_price}{e.adjusted_price == null && e.retail_price}<br/></div>
                )}

                <h1>Other</h1>
                {product.filter(function(data) {
                    if (data.product_type === "Other") {
                        return true;
                    }
                    return false;
                }).map((e, i) => <div key = {i}>{e.name} ${e.adjusted_price != null && e.adjusted_price}{e.adjusted_price == null && e.retail_price}<br/></div>
                )}

                <h1>Phone</h1>
                {product.filter(function(data) {
                    if (data.product_type === "Phone") {
                        return true;
                    }
                    return false;
                }).map((e, i) => <div key = {i}>{e.name} ${e.adjusted_price != null && e.adjusted_price}{e.adjusted_price == null && e.retail_price}<br/></div>
                )}
                
                <h1>Rate Plan</h1>
                {product.filter(function(data) {
                    if (data.product_type === "Rate Plan") {
                        return true;
                    }
                    return false;
                }).map((e, i) => <div key = {i}>{e.name} ${e.adjusted_price != null && e.adjusted_price}{e.adjusted_price == null && e.retail_price}<br/></div>
                )} 
                
                <h1>Tablet</h1>
                {product.filter(function(data) {
                    if (data.product_type === "Tablet") {
                        return true;
                    }
                    return false;
                }).map((e, i) => <div key = {i}>{e.name} ${e.adjusted_price != null && e.adjusted_price}{e.adjusted_price == null && e.retail_price}<br/></div>
                )}   
            </div>
        )
    }
}

export default product_item

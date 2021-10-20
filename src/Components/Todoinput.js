import React, { Component } from 'react';

export default class Todoinput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem}=this.props
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">         
                        <div className="input-group-text bg-primary text-white">
                            <i className="fas fa-book "></i>
                        </div>
                        <input 
                        type="text" 
                        placeholder="Add a todo item" 
                        className=" text-capitalize form-control"
                        value={item}
                        onChange={handleChange}
                        ></input>
                    </div>

                    <div className="d-grid gap-2">
                        <button className={editItem?"btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3"} type="submit">{editItem?'Edit Item':"Add Item"}</button>
                    </div>
                </form>
            </div>
        )
    }
}

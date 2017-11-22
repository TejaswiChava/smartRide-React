import React from 'react';

var Confirm = require('react-confirm-bootstrap');

class DeleteModal extends React.Component{
    render(){
        return(
            <div>
                 <Confirm
                    onConfirm={this.onConfirm}
                    body="Are you sure you want to delete this?"
                    confirmText="Confirm Delete"
                    title="Deleting Stuff">
                    <button>Delete Stuff</button>
                </Confirm>
                </div>
        )
    }




}
export default DeleteModal;
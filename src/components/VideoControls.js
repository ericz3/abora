import React from 'react';


class VideoControls extends React.Component {
    render (){
        return (
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <div class="container-fluid">
                <div class="row p-1"  id="room-controls" style="box-shadow: 1px 1px rgba(0,0,0,0.15); background-color: rgba(0,0,0,0.1);">
        
                    <div class="col align-self-center" >
                        <input type="text" class="form-control" id="room-name" placeholder="Enter a room name"/>
                    </div>
                    <div class="col col-md-offset-1 align-self-center">
                        <input type="checkbox" class="form-check-input" id="screen-share-checkbox"/>
                        <label class="form-check-label" id="screen-share-checkbox-label" for="screen-share-checkbox">Share my screen</label>
                        <button id="button-join" type="button" class="btn btn-primary">Join</button>
                        <button id="button-leave"  type="button" class="btn btn-danger" style="display: none">Leave Room</button>
                    </div>
                    <div class="col col-md-offset-1 align-self-center" >
                    </div>
                    <div class="col col-md-offset-1 align-self-center" >
                        <button type="button" class="btn btn-info" data-toggle="modal" relatedTarget='preview-modal' data-target="#preview-modal">
                        Preview
                        </button>
                    </div>
                </div>
                <div class="row">&nbsp;
                </div>
                <div class="row justify-content-center">
                    <div class="col-2 border-right">
                        <div id="preview">
                            <div id="local-media"></div>
                        </div>
                    </div>
                    <div class="col-6 border-right">
                        <div id="remote-media"></div>
                    </div>
                    <div class="col-4">
                        <div style=' height: 180px; width:400px;  background-color:rgba(0,0,0,0.0.05)'>
                            <h4>Log</h4>
                            <div id="log" style='overflow: scroll; width:100%; height: 100%; box-shadow: 1px 1px rgba(0,0,0,0.15);  background-color:rgba(0,0,0,0.1)'></div>
                        </div>
                    </div>
                </div>
            </div>
    
        
            <div class="modal fade" id="preview-modal" tabindex="-1" role="dialog" aria-labelledby="preview-modal-label" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="preview-modal-label">Video Preview</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div id="preview-local-media">
                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoControls;
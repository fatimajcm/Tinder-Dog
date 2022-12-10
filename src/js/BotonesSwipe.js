/* eslint-disable no-unused-vars */

import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import { IconButton } from '@material-ui/core';
import '../css/BotonesSwipe.css'


function BotonesSwipe() {
  return (
    <div className="btnSwipe">

        <IconButton className="btnSwipe_replay">
             <ReplayIcon fontSize="large" />
        </IconButton>

        <IconButton className="btnSwipe_close">
             <CloseIcon fontSize="large" />
        </IconButton>

        <IconButton className="btnSwipe_flash">
             <FlashOnIcon fontSize="large" />
        </IconButton>

        <IconButton className="btnSwipe_fav">
             <FavoriteIcon fontSize="large" />
        </IconButton>

        <IconButton className="btnSwipe_star">
             <StarIcon fontSize="large" />
        </IconButton>

    </div>
  )
}

export default BotonesSwipe
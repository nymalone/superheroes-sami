import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'
import './styles.scss'

const MainModal = ({
  className,
  children,
  closeModal,
  onBackdropClick
}) => (
  <>
    <div className='modal-container'>
      <div className='modal-top-bar'>
        <Button
          text='X'
          onClick={() => closeModal(null)}
        />
      </div>
      <div className='modal-content'>
        {children}
      </div>
    </div>
    <div
      className='modal-overlay'
      onClick={() => onBackdropClick()}
    />
  </>
)

MainModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  onBackdropClick: PropTypes.func.isRequired
}

export default MainModal

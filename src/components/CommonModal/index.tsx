import React, { Children, useState } from 'react';
import { Input,Button,Modal } from 'antd';
interface ModalProps {
  title: string;
  content: any;
  visible: boolean;
  handleOk?: ()=>void;
  handleCancel?: ()=>void;
}

const CommonModal: React.FC<ModalProps> = props => {
  const {title,content,visible,handleOk,handleCancel} = props
  return (
    <>
      <Modal title={title} visible={visible} onOk={handleOk} onCancel={handleCancel}>
        {content}
      </Modal>
      
    </>
  );
};
export default CommonModal;
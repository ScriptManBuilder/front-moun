import React from 'react';
import styled from 'styled-components';
import { useAlert } from '../contexts/AlertContext';
import CustomAlert from './customAlert';

const AlertContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  pointer-events: none;
  
  & > * {
    pointer-events: auto;
  }
`;

const AlertManager: React.FC = () => {
  const { alerts, hideAlert } = useAlert();

  return (
    <AlertContainer>
      {alerts.map((alert, index) => (
        <CustomAlert
          key={alert.id}
          isVisible={true}
          type={alert.type}
          title={alert.title}
          message={alert.message}
          duration={alert.duration}
          onClose={() => hideAlert(alert.id)}
        />
      ))}
    </AlertContainer>
  );
};

export default AlertManager;
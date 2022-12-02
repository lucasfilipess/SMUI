import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import { convertToPath } from '@/utils';

const Customers: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-2xl text-pink-400">Customers</h1>
      <Button
        onClick={() =>
          navigate(
            convertToPath([t('navigation.customers'), t('navigation.register-customer')]),
          )
        }
      >
        {t('navigation.register-customer')}
      </Button>
    </div>
  );
};

export default Customers;

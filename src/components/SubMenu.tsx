import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { chevronDown, chevronForward } from 'ionicons/icons';
import { ReactNode, useState } from 'react';

interface SubMenuProps {
  children: ReactNode;
  icon: string;
  title: string;
}

const SubMenu: React.FC<SubMenuProps> = ({ children, icon, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IonItem lines="none" detail={false} onClick={() => setOpen(!open)}>
        <IonIcon slot="start" icon={icon} />
        <IonLabel>{title}</IonLabel>
        <IonIcon slot="end" icon={open ? chevronDown : chevronForward} />
      </IonItem>
      <div className={open ? '' : 'ion-hide'}>
        {children}
      </div>
    </>
  );
};

export default SubMenu;

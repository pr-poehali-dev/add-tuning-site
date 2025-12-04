import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import type { ContactInfo } from '../AdminTypes';

interface ContactsTabProps {
  contactInfo: ContactInfo;
  setContactInfo: (value: ContactInfo) => void;
  saveContacts: () => void;
}

const ContactsTab = ({
  contactInfo,
  setContactInfo,
  saveContacts,
}: ContactsTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Контактная информация</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Телефон</label>
              <Input
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Email</label>
              <Input
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Telegram</label>
              <Input
                value={contactInfo.telegram}
                onChange={(e) => setContactInfo({ ...contactInfo, telegram: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">WhatsApp</label>
              <Input
                value={contactInfo.whatsapp}
                onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">VK</label>
              <Input
                value={contactInfo.vk}
                onChange={(e) => setContactInfo({ ...contactInfo, vk: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Адрес</label>
            <Textarea
              value={contactInfo.address}
              onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
              rows={2}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Часы работы</label>
            <Input
              value={contactInfo.workHours}
              onChange={(e) => setContactInfo({ ...contactInfo, workHours: e.target.value })}
            />
          </div>
          <Button onClick={saveContacts} className="w-full">
            <Icon name="Save" size={16} className="mr-2" />
            Сохранить контакты
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactsTab;

import { ContactCard } from "@/components/ui/contact-card";
import { MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <ContactCard
            title="Get in touch"
            description="Replace this description with your own description."
            contactInfo={[
              {
                icon: MailIcon,
                label: 'Email',
                value: 'hello@example.com',
              },
              {
                icon: PhoneIcon,
                label: 'Phone',
                value: '(123) 456-7890',
              },
              {
                icon: MapPinIcon,
                label: 'Address',
                value: '123 Innovation Street, Tech City, TC 12345',
                className: 'col-span-2',
              }
            ]}
          >
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label>Name</Label>
                <Input type="text" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Email</Label>
                <Input type="email" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Phone</Label>
                <Input type="phone" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Message</Label>
                <Textarea />
              </div>
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </ContactCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;
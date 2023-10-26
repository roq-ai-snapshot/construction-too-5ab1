interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Store Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Store Manager', 'Store Employee'],
  tenantName: 'Supplier',
  applicationName: 'Construction tool rental',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read product information', 'Place an order', 'Read order status', 'Update personal information'],
  ownerAbilities: [
    'Manage store information',
    'Manage product inventory',
    'Manage supplier information',
    'View user information',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/0cc5958c-fd37-4c70-a7ee-90b5ff5eea42',
};

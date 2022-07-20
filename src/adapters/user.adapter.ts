export const CreatedUserAdapter = (user: any) => ({
  name: user.data.name,
  email: user.data.email,
  phone: user.data.phone,
  address: user.data.address,
  city: user.data.city,
  state: user.data.state,
  zip: user.data.zip,
  country: user.data.country,
  company: user.data.company,
  createdAt: user.data.createdAt,
  updatedAt: user.data.updatedAt,
  id: user.data.id,
});

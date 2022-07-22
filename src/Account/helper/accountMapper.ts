export function accountMapper(AccountDto: any) {
  if (AccountDto.account_type === 'Saving') AccountDto.account_type = 'Savings';
  else if (AccountDto.account_type === 'Current')
    AccountDto.account_type = 'Bank';
  return {
    account_id: parseInt(AccountDto.account_id),
    consumer_id: parseInt(AccountDto.consumer_id),
    account_nature: null,
    account_type: "Bank",
    active: AccountDto.active ?? 1,
    balance_amount: 0.0,
    box_color: AccountDto.box_color ?? null,
    box_icon: AccountDto.box_icon ?? null,
    description: AccountDto.description ?? null,
    flex1: null,
    flex2: null,
    flex3: null,
    flex4: null,
    flex5: null,
    flex6: null,
    gl_account_no: null,
    title: AccountDto.title ?? null,
    opening_balance: parseInt(AccountDto.opening_balance) ?? 0,
    record_created_on: new Date(),
    is_sync: AccountDto.is_sync ?? 1,
    device_type: 'Andriod',
    bank_name: AccountDto.bank_name ?? null,
    sys_defined: 1,
    net_amount_total: parseInt(AccountDto.net_amount_total) ?? 0,
  };
}

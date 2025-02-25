export type PayableType = 'incoming' | 'outgoing';
export type PayableStatus = 'pending' | 'paid' | 'overdue' | 'cancelled';
export type PayableCategory = 
  | 'rent'
  | 'maintenance_fee'
  | 'utility_fee'
  | 'insurance_fee'
  | 'service_fee'
  | 'deposit_fee'
  | 'other';
export type PaymentMethod = 'bank_transfer' | 'cash' | 'check';

export interface PayableAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  uploaded_at: string;
}

export interface Payable {
  id: string;
  created_at: string;
  office_id: string;
  contract_id: string;
  type: PayableType;
  category: PayableCategory;
  amount: number;
  due_date: string;
  payment_date?: string;
  payment_method?: PaymentMethod;
  status: PayableStatus;
  transaction_ref?: string;
  notes?: string;
  attachments: PayableAttachment[];
  contract?: {
    tenant?: {
      id: string;
      full_name: string;
    };
    unit?: {
      id: string;
      unit_number: string;
      building?: {
        id: string;
        name: string;
      };
    };
  };
}
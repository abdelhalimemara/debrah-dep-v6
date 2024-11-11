import { FileText, Download } from 'lucide-react';
import { saveAs } from 'file-saver';
import { formatCurrency } from '../../lib/utils';
import type { Payable } from '../../types';

interface PayableReceiptProps {
  payable: Payable;
}

export function PayableReceipt({ payable }: PayableReceiptProps) {
  const generateReceipt = async () => {
    const receiptContent = `
Receipt #${payable.id}
Date: ${new Date().toLocaleDateString()}

Amount: ${formatCurrency(payable.amount)}
Category: ${payable.category?.replace('_', ' ') || 'Other'}
Status: ${payable.status}
Due Date: ${new Date(payable.due_date).toLocaleDateString()}
${payable.payment_date ? `Payment Date: ${new Date(payable.payment_date).toLocaleDateString()}` : ''}
${payable.payment_method ? `Payment Method: ${payable.payment_method.replace('_', ' ')}` : ''}
${payable.transaction_ref ? `Reference: ${payable.transaction_ref}` : ''}

Tenant: ${payable.contract?.tenant?.full_name || 'N/A'}
Unit: ${payable.contract?.unit?.building?.name ? `${payable.contract.unit.building.name} - Unit ${payable.contract.unit.unit_number}` : 'N/A'}

${payable.notes ? `Notes: ${payable.notes}` : ''}
    `.trim();

    const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `receipt-${payable.id.slice(0, 8)}.txt`);
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCategory = (category: string | null | undefined): string => {
    if (!category) return 'Other';
    return category.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-lg font-medium text-gray-900">Receipt #{payable.id.slice(0, 8)}</h2>
        <button
          onClick={generateReceipt}
          className="btn btn-secondary flex items-center space-x-2"
        >
          <Download className="w-4 h-4" />
          <span>Download Receipt</span>
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(payable.amount)}
            </p>
            <p className="text-sm text-gray-500">
              {formatCategory(payable.category)}
            </p>
          </div>
          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(payable.status)}`}>
            {payable.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Due Date</p>
            <p className="text-sm font-medium text-gray-900">
              {new Date(payable.due_date).toLocaleDateString()}
            </p>
          </div>
          {payable.payment_date && (
            <div>
              <p className="text-sm text-gray-500">Payment Date</p>
              <p className="text-sm font-medium text-gray-900">
                {new Date(payable.payment_date).toLocaleDateString()}
              </p>
            </div>
          )}
          {payable.payment_method && (
            <div>
              <p className="text-sm text-gray-500">Payment Method</p>
              <p className="text-sm font-medium text-gray-900 capitalize">
                {payable.payment_method.replace('_', ' ')}
              </p>
            </div>
          )}
          {payable.transaction_ref && (
            <div>
              <p className="text-sm text-gray-500">Reference</p>
              <p className="text-sm font-medium text-gray-900">
                {payable.transaction_ref}
              </p>
            </div>
          )}
        </div>

        {payable.contract?.tenant && (
          <div>
            <p className="text-sm text-gray-500">Tenant</p>
            <p className="text-sm font-medium text-gray-900">
              {payable.contract.tenant.full_name}
            </p>
          </div>
        )}

        {payable.contract?.unit && (
          <div>
            <p className="text-sm text-gray-500">Unit</p>
            <p className="text-sm font-medium text-gray-900">
              {payable.contract.unit.building?.name} - Unit {payable.contract.unit.unit_number}
            </p>
          </div>
        )}

        {payable.notes && (
          <div>
            <p className="text-sm text-gray-500">Notes</p>
            <p className="text-sm text-gray-900">{payable.notes}</p>
          </div>
        )}
      </div>
    </div>
  );
}
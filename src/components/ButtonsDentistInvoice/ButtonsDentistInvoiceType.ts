export type ServiceName = {
    installingSeal: string;
    channelCleaning: string;
    treatmentCaries: string;
}

export type ServicePrice = {
    installingSealPrice: number;
    channelCleaningPrice: number;
    treatmentCariesPrice: number;
}

export type ButtonsDentistInvoiceProps = {
    serviceName: ServiceName;
    price: ServicePrice;
}

export type CheckList = {
    installingSeal: number;
    channelCleaning: number;
    treatmentCaries: number;
} | any
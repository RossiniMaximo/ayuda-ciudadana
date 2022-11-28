export type ReportProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  latitude: number;
  longitude: number;
  UserId: number;
  status: string;
  onDelete?: (a: any) => any;
  onUpdate?: (a: any) => any;
};

export type EditReportProps = {
  onUpdate: (a: ReportProps) => any;
};

export interface Tasks {
  id: string;
  title: string;
  description: string;
  status: string;
  estimation: string;
  time_spent: any;
  created_on: string;
  min_available_sizes: string;
  meta: { persons_involved: { name: string; role: string } };
}

export interface Roles {
  display: string;
  value: string;
}

export interface Status {
  display: string;
  value: string;
}

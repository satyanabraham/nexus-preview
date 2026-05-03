// Centralized platform image configuration
// Using Unsplash images for production deployment

const serverRackImage = 'https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByYWNrJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NzM4NzQxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080';
const distributedNetworkImage = 'https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjBkaXN0cmlidXRlZCUyMGNvbXB1dGluZ3xlbnwxfHx8fDE3NzM5MTcyODF8MA&ixlib=rb-4.1.0&q=80&w=1080';
const dashboardImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBtb25pdG9yaW5nfGVufDF8fHx8MTc3MzkxNzI4MXww&ixlib=rb-4.1.0&q=80&w=1080';
const facilitiesFloorPlanImage = 'https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwZmxvb3IlMjBwbGFufGVufDF8fHx8MTc3MzkxNzI4MXww&ixlib=rb-4.1.0&q=80&w=1080';
const digitalTwinSimulatorImage = 'https://images.unsplash.com/photo-1634836466795-2b71a032821c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHdpbiUyMHRlY2hub2xvZ3klMjBzaW11bGF0aW9ufGVufDF8fHx8MTc3MzkxNzI4Mnww&ixlib=rb-4.1.0&q=80&w=1080';
const finOpsComprehensiveDashboardImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBncmFwaHN8ZW58MXx8fHwxNzczOTE3MjgyfDA&ixlib=rb-4.1.0&q=80&w=1080';
const finOpsAnomalyDetectionImage = 'https://images.unsplash.com/photo-1667396473517-19461ee8eb4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm9tYWx5JTIwZGV0ZWN0aW9uJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzM5MTcyODN8MA&ixlib=rb-4.1.0&q=80&w=1080';
const apmObservabilityHubImage = 'https://images.unsplash.com/photo-1690817954901-288d136f0ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYnNlcnZhYmlsaXR5JTIwbW9uaXRvcmluZyUyMG1ldHJpY3N8ZW58MXx8fHwxNzczOTE3MjgzfDA&ixlib=rb-4.1.0&q=80&w=1080';
const kubernetesOptimizationImage = 'https://images.unsplash.com/photo-1748723594319-142e211b46a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrdWJlcm5ldGVzJTIwY2xvdWQlMjBvcmNoZXN0cmF0aW9ufGVufDF8fHx8MTc3MzkxNzI4M3ww&ixlib=rb-4.1.0&q=80&w=1080';

export const platformImages = {
  // Data Center / Infrastructure images
  serverRack: serverRackImage,
  dataCenter: serverRackImage,
  
  // Network / Distributed Computing images
  distributedNetwork: distributedNetworkImage,
  aiWorkload: distributedNetworkImage,
  
  // Dashboard / Analytics images
  dashboard: dashboardImage,
  analytics: dashboardImage,
  finOps: dashboardImage,
  
  // DCIM-specific visualization images
  facilitiesFloorPlan: facilitiesFloorPlanImage,
  digitalTwin: digitalTwinSimulatorImage,
  
  // FinOps-specific dashboard images
  finOpsComprehensive: finOpsComprehensiveDashboardImage,
  finOpsAnomalyDetection: finOpsAnomalyDetectionImage,
  
  // APM-specific dashboard images
  apmObservabilityHub: apmObservabilityHubImage,
  
  // Kubernetes-specific dashboard images
  kubernetesOptimization: kubernetesOptimizationImage,
};

// Export individual images for easy import
export {
  serverRackImage,
  distributedNetworkImage,
  dashboardImage,
  facilitiesFloorPlanImage,
  digitalTwinSimulatorImage,
  finOpsComprehensiveDashboardImage,
  finOpsAnomalyDetectionImage,
  apmObservabilityHubImage,
  kubernetesOptimizationImage,
};

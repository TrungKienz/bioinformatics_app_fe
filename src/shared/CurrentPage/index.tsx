const lungOverviewPage = '/lung-cancer/overview';
const liverOverviewPage = '/liver-cancer/overview';
const breastOverviewPage = '/breast-cancer/overview';
const thyroidOverviewPage = '/thyroid-cancer/overview';
const colorectalOverviewPage = '/colorectal-cancer/overview';

const lungCancerPage = '/lung-cancer/gene-mutation';
const liverCancerPage = '/liver-cancer/gene-mutation';
const breastCancerPage = '/breast-cancer/gene-mutation';
const thyroidCancerPage = '/thyroid-cancer/gene-mutation';
const colorectalCancerPage = '/colorectal-cancer/gene-mutation';

const lungDrugPage = '/lung-cancer/drug';
const liverDrugPage = '/liver-cancer/drug';
const breastDrugPage = '/breast-cancer/drug';
const thyroidDrugPage = '/thyroid-cancer/drug';
const colorectalDrugPage = '/colorectal-cancer/drug';

const lungTreatmentPage = '/lung-cancer/other-treatment';
const liverTreatmentPage = '/liver-cancer/other-treatment';
const breastTreatmentPage = '/breast-cancer/other-treatment';
const thyroidTreatmentPage = '/thyroid-cancer/other-treatment';
const colorectalTreatmentPage = '/colorectal-cancer/other-treatment';

export const currentPage = (currentLocation: string) => {
  let resultLocation;
  switch (currentLocation) {
    case lungOverviewPage:
    case lungCancerPage:
    case lungDrugPage:
    case lungTreatmentPage:
      resultLocation = 'lungCancerPage';
      break;
    case liverOverviewPage:
    case liverCancerPage:
    case liverDrugPage:
    case liverTreatmentPage:
      resultLocation = 'liverCancerPage';
      break;
    case breastOverviewPage:
    case breastCancerPage:
    case breastDrugPage:
    case breastTreatmentPage:
      resultLocation = 'breastCancerPage';
      break;
    case thyroidOverviewPage:
    case thyroidCancerPage:
    case thyroidDrugPage:
    case thyroidTreatmentPage:
      resultLocation = 'thyroidCancerPage';
      break;
    case colorectalOverviewPage:
    case colorectalCancerPage:
    case colorectalDrugPage:
    case colorectalTreatmentPage:
      resultLocation = 'colorectalCancerPage';
      break;
    default:
      resultLocation = '';
      break;
  }

  return resultLocation;
};

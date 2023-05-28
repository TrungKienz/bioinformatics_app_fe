import { request } from '@umijs/max';
import { server } from '@/pages/Api';
const baseUrl = server;
class HealthRecordService {
  saveHealthRecord = async (body: any, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/${body.typeHealthRecord}/save`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
  getHealthRecord = async (body: any,typeHealthRecord:string, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/${typeHealthRecord}/get-health-record`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
  deleteHealthRecord = async (typeHealthRecord:string,id:number, options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/${typeHealthRecord}/delete-health-record`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { id: id },
      ...(options || {}),
    });
  };
  getAllByType = async (recordType:string,options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/${recordType}/get-all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options || {}),
    });
  };
  search = async (body: object, typeHealthRecord,options?: { [key: string]: any }) => {
    return request<ErrorResponse>(`${baseUrl}/${typeHealthRecord}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    });
  };
}
export default new HealthRecordService();

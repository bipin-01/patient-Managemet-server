import { IsNumber, IsString } from 'class-validator';
import { Sex } from 'src/patients/enums/patients-enums';

export class PatientDTO {
  patient_ssn: string;
  patient_firstname: string;
  patient_lastname: string;
  patient_country: string;
  patient_address1: string;
  patient_address2: string;
  patient_number1: string;
  patient_number2: string;
  patient_sex: Sex;
  patient_dob?: Date;
  patient_dod?: Date;
  patient_email: string;
  patient_height: number;
  patient_weight: number;
  patient_bloodtype: string;
  patient_education_background: string;
  patient_occupation: string;
}

export class HospitalDTO {
  hospital_id: string;
  hospital_name: string;
  hospital_address: string;
  hospital_number: string;
  hospital_email: string;
}

export class MedicationDTO {
  medication_id: string;
  medication_name: string;
  medication_company: string;
  medication_level: string;
  medication_remark: string;
}

export class NurseDto {
  nurse_id: string;
  nurse_firstname: string;
  nurse_lastname: string;
  nurse_address1: string;
  nurse_address2?: string;
  nurse_number1: string;
  nurse_checkIn?: Date;
  nurse_checkOut?: Date;
}

export class ObservationDTO {
  observation_id: string;
  observation_date?: Date;
  observation_time?: Date;
  observation_remark: string;
  patient_ssn: string;
  practitioner_id: string;
  hospital_id: string;
  medication_id: string;
  nurse_id: string;
}

export class PractitionerDto {
  practitioner_id: string;
  practitioner_firstname: string;
  practitioner_lastname: string;
  practitioner_address1?: string;
  practitioner_address2?: string;
  practitioner_number1?: string;
  practitioner_number2?: string;
  practitioner_checkin?: Date;
  practitioner_checkout?: Date;
}

package com.hospital.commons.constans.endpoints.event;

public interface IInsurancePolicyEndPoint {
    String INSURANCE_POLICY_BASE_URL = "/v1/insurancePolicy";
    String INSURANCE_POLICY_CREATE_URL = "/create";
    String INSURANCE_POLICY_DELETE_URL = "/delete/{insurancePolicyId}";
    String INSURANCE_POLICY_UPDATE_URL = "/update";
    String INSURANCE_POLICY_GET_URL = "/find/{insurancePolicyId}";
}

package com.hospital.commons.constans.endpoints.nurseShift;

public interface INurseShiftEndPoints {

    String NURSE_BASE_URL = "/v1/nurse";
    String NURSE_CREATE_URL = "/create";
    String NURSE_DELETE_URL = "/delete/{shiftId}";
    String NURSE_UPDATE_URL = "/update";
    String NURSE_GET_URL = "/find/{shiftId}";
}


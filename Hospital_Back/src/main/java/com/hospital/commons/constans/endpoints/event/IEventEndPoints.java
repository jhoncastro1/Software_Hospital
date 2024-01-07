package com.hospital.commons.constans.endpoints.event;

public interface IEventEndPoints {
    String EVENT_BASE_URL = "/v1/event";
    String EVENT_CREATE_URL = "/create";
    String EVENT_DELETE_URL = "/delete/{eventId}";
    String EVENT_UPDATE_URL = "/update";
    String EVENT_GET_URL = "/find/{eventId}";
}

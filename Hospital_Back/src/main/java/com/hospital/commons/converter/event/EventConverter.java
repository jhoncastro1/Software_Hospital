package com.hospital.commons.converter.event;

import com.hospital.commons.constans.response.IResponse;
import com.hospital.commons.domains.DTO.event.EventDTO;
import com.hospital.commons.helpers.HelperMapper;
import com.hospital.model.entity.event.EventEntity;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Component;

@Component
@Log4j2
public class EventConverter {

    public EventEntity convertEventDTOToEventEntity(EventDTO eventDTO){
        EventEntity eventEntity = new EventEntity();
        try{
            eventEntity = HelperMapper.modelMapper().map(eventDTO, eventEntity.getClass());
        }
        catch (Exception e){
            log.error(IResponse.DOCUMENT_FAIL + e);
        }
        return eventEntity;

    }
}

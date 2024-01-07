package com.hospital.service.event;

import com.hospital.commons.constans.response.IResponse;
import com.hospital.commons.converter.event.EventConverter;
import com.hospital.commons.domains.DTO.event.EventDTO;
import com.hospital.model.entity.event.EventEntity;
import com.hospital.model.repository.event.IEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EventService {

    @Autowired
    public IEventRepository iEventRepository;

    @Autowired
    public EventConverter eventConverter;

    public String createEvent(EventEntity eventEntity){
        try {
            Optional<EventEntity> find = iEventRepository.findById(eventEntity.getEvent_id());
            if (!find.isPresent()){
                this.iEventRepository.save(eventEntity);
                return IResponse.CREATE_SUCCESS;
            }else {return IResponse.CREATE_FAIL;}
        }catch (Exception e){return IResponse.INTERNAL_SERVER_ERROR;}
    }

    public String deleteEvent(Integer eventId){
        try {
            Optional<EventEntity> find = iEventRepository.findById(eventId);
            if (find.isPresent()){
                this.iEventRepository.delete(find.get());
                return IResponse.DELETE_SUCCESS;
            }else {return IResponse.DELETE_FAIL;}
        }catch (Exception e){return IResponse.INTERNAL_SERVER_ERROR;}
    }

    public String updateEvent(EventDTO eventDTO){
        try {
            if (eventDTO == null || eventDTO.getEvent_id() == null){
                return IResponse.NOT_FOUND;
            }
            Optional<EventEntity> find = iEventRepository.findById(eventDTO.getEvent_id());
            if (find.isPresent()){
                EventEntity eventEntity = eventConverter.convertEventDTOToEventEntity(eventDTO);
                this.iEventRepository.save(eventEntity);
                return IResponse.UPDATE_SUCCESS;
            }else {return IResponse.UPDATE_FAIL;}
        }catch (Exception e){return IResponse.INTERNAL_SERVER_ERROR;}
    }

    public String findEvent(Integer eventId){
        try{
            Optional<EventEntity> find = iEventRepository.findById(eventId);
            if (find.isPresent()){
                String event = find.get().toString();
                return event;
            }else {return IResponse.NOT_FOUND;}
        }catch (Exception e){return IResponse.INTERNAL_SERVER_ERROR;}
    }
}

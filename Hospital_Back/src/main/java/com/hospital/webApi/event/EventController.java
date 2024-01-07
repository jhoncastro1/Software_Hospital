package com.hospital.webApi.event;

import com.hospital.commons.constans.endpoints.event.IEventEndPoints;
import com.hospital.commons.domains.DTO.event.EventDTO;
import com.hospital.model.entity.event.EventEntity;
import com.hospital.service.event.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(IEventEndPoints.EVENT_BASE_URL)
public class EventController {
    @Autowired
    private EventService eventService;

    @PostMapping(IEventEndPoints.EVENT_CREATE_URL)
    public String createEvent(@RequestBody EventEntity eventEntity){
        return this.eventService.createEvent(eventEntity);
    }

    @DeleteMapping(IEventEndPoints.EVENT_DELETE_URL)
    public String deleteEvent(@PathVariable Integer eventId){
        return this.eventService.deleteEvent(eventId);
    }

    @PutMapping(IEventEndPoints.EVENT_UPDATE_URL)
    public String updateEvent(@RequestBody EventDTO eventDTO){
        return this.eventService.updateEvent(eventDTO);
    }

    @GetMapping(IEventEndPoints.EVENT_GET_URL)
    public String findEvent(@PathVariable Integer eventId){
        return this.eventService.findEvent(eventId);
    }

}

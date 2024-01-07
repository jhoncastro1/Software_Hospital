package com.hospital.commons.domains.DTO.event;

import lombok.*;

import java.sql.Date;

@Data
@Getter
@Setter
@ToString
@AllArgsConstructor
public class EventDTO {
    private Integer event_id;
    private Date event_date;
    private String event_type;
}

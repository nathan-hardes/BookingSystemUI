import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/booking';
import { Space } from '../models/space';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm: FormGroup;

  spaces: Space[] = [
    { id: 1, name: 'Boardroom'},
    { id: 2, name: 'Fishbowl'},
  ];

  @Input() booking: Booking;
  @Output() bookingMade = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.booking = new Booking();
    this.booking.start = new Date();
    this.booking.start.setHours(this.booking.start.getHours() + 1);
    this.booking.start.setMinutes(0);
    this.booking.end = new Date();
    this.booking.end.setHours(this.booking.end.getHours() + 2);
    this.booking.end.setMinutes(0);
    this.booking.space = new Space();

    this.bookingForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      start: [this.booking.start, [Validators.required]],
      startTime: [this.booking.start, [Validators.required]],
      end: [this.booking.end, [Validators.required]],
      endTime: [this.booking.end, [Validators.required]],
      space: [this.booking.space, [Validators.required]]
    });
  }

  get name() {
    return this.bookingForm.get('name');
  }

  get start() {
    return this.bookingForm.get('start');
  }

  get startTime() {
    return this.bookingForm.get('startTime');
  }

  get end() {
    return this.bookingForm.get('end');
  }

  get endTime() {
    return this.bookingForm.get('endTime');
  }

  get space() {
    return this.bookingForm.get('space');
  }

  async onSubmit() {
    this.booking = this.bookingForm.value;

    this.bookingService.makeBooking(this.booking)
      .subscribe(() => {
        this.bookingMade.emit();
      });
  }
}

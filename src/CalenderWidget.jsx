import React from "react";
import "./CalenderWidget.css";

const CalenderWidget = () => {
  return (
    <div className="calender-widget-container">
      <div className="calender-widget-title-container">
        <p className="calender-widget-title">Calender</p>
        <p className="calender-widget-description">A few upcoming tasks...</p>
      </div>
      <div className="calender-grid-container">
        <h1 className="current-month"> December 2020 </h1>
        <ol className="calender-grid">
          <li class="day-name">Sun</li>
          <li class="day-name">Mon</li>
          <li class="day-name">Tue</li>
          <li class="day-name">Wed</li>
          <li class="day-name">Thu</li>
          <li class="day-name">Fri</li>
          <li class="day-name">Sat</li>
          <li class="first-day">1</li>

          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
        </ol>
      </div>
    </div>
  );
};

export default CalenderWidget;

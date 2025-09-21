import React from "react";
import "./ImportantDates.css";
import satsangImg from "../assets/photo24.jpg"; // ✅ Replace with your image

const ImportantDates = () => {
  return (
    <div className="important-dates-container">
      {/* Heading at top */}
      <div className="content-section top">
        <h2>महत्वपूर्ण तिथियाँ</h2>
      </div>

      {/* Photo in the middle */}
      <div className="image-section">
        <img src={satsangImg} alt="Important Event" />
      </div>

      {/* Dates after photo */}
      <div className="content-section bottom">
        <div className="dates-box">
          <p>
            🔔 <strong>चितौना धाम, वाराणसी (मुख्यालय)</strong> – हर महीने <strong>1, 2, 15, 16, 25 और 26</strong><br />
            📞 संपर्क: 7080224214, 7080224215, 7080224216
          </p>

          <p>
            📅 <strong>जय गुरुबंदे जन कल्याण आश्रम (बलिया)</strong> – हर महीने <strong>5</strong><br />
            📞 संपर्क: 8858437503, 6388001542
          </p>

          <p>
            📅 <strong>नगवा आश्रम (गाजीपुर)</strong> – हर महीने <strong>4 और 19</strong><br />
            📞 संपर्क: 7080224203
          </p>

          <p>
            📅 <strong>मिर्जापुर आश्रम</strong> – हर महीने <strong>3</strong><br />
            📞 संपर्क: 7651881816
          </p>

          <p>
            📅 <strong>शिवरामपुर (श्री गीर्जा प्रसाद यादव जी के निवास पर)</strong> – हर महीने <strong>27</strong><br />
            📞 संपर्क: 8738868292
          </p>

          <p>
            📅 <strong>सिद्धागढ़ घाट आश्रम (गाजीपुर)</strong> – हर महीने <strong>23</strong><br />
            📞 संपर्क: 8808305735, 9793900455
          </p>

          <p>
            📅 <strong>गोरखपुर आश्रम</strong> – हर महीने <strong>21 और 22</strong><br />
            📞 संपर्क: 9935908011
          </p>

          <p>
            📅 <strong>जय गुरुबंदे आश्रम, नागले (मुंबई)</strong> – हर महीने <strong>6 से 10</strong><br />
            📞 संपर्क: 9819560938
          </p>

        </div>
      </div>
    </div>
  );
};

export default ImportantDates;

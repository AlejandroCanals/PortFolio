import { useTranslation } from "react-i18next";
import "./modal.css";

const PrivacyPolicyModal = ({ onClose }) => {
  const { t } = useTranslation();

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2>{t("privacy_policy.title")}</h2>

        <h3>{t("privacy_policy.section1.title")}</h3>
        <p>{t("privacy_policy.section1.content")}</p>

        <h3>{t("privacy_policy.section2.title")}</h3>
        <p>{t("privacy_policy.section2.content")}</p>

        <h3>{t("privacy_policy.section3.title")}</h3>
        <p>{t("privacy_policy.section3.content")}</p>

        <h3>{t("privacy_policy.section4.title")}</h3>
        <p>{t("privacy_policy.section4.content")}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;

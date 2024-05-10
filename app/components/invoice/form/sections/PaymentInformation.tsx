"use client";

// Components
import { FormInput, Subheading } from "@/app/components";

// Contexts
import { useTranslationContext } from "@/contexts/TranslationContext";

const PaymentInformation = () => {
    const { _t } = useTranslationContext();
    return (
        <section>
            <Subheading>{_t("form.steps.paymentInfo.heading")}:</Subheading>
            <div className="flex flex-wrap gap-10 mt-5">
                <FormInput
                    name="details.paymentInformation.bankname"
                    label={_t("form.steps.paymentInfo.bankName")}
                    placeholder={_t("your phone Number")}
                    vertical
                />

            </div>
        </section>
    );
};

export default PaymentInformation;

"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

const BaseFooter = () => {
    const { _t } = useTranslationContext();

    return (
        <footer className="container py-10">
            <p>
                {_t("footer.developedBy")}{" "}
                <a
                    href="https://asaadsiddiqui.me"
                    target="_blank"
                    style={{ textDecoration: "Bold" }}
                >
                    Asaad SIddiqui
                </a>
            </p>
        </footer>
    );
};

export default BaseFooter;

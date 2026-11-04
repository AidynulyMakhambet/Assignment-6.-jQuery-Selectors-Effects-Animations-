$(document).ready(function () {
    // part 1:
    console.log("jQuery is ready!");

    $("h1").css("letter-spacing", "0.5px");
    $("#personal-headline").text("Front-End Developer | jQuery Enthusiast");
    $(".intro-text").html("Hello! I am <strong>Makhambet</strong> from group <strong>IT-2504</strong>, learning interactive web development with jQuery.");

    $("#update-text-btn").click(function () {
        $("#personal-headline").text("Updated Headline: Mastering jQuery Selectors & Effects!");
    });

    $("#update-html-btn").click(function () {
        $(".intro-text").html("<em>Updated via .html():</em> Welcome to the interactive portfolio of <strong>[your name]</strong> (<strong>[your group]</strong>)!");
    });

    $("#style-btn").click(function () {
        $("h1").css({
            "color": "#059669",
            "border-bottom": "2px solid #059669",
            "padding-bottom": "6px"
        });
    });

    $("#light-theme-btn").click(function () {
        $("body").css({
            "background-color": "#f4f6f9",
            "color": "#1f2937"
        });
        $(".card").css({
            "background-color": "#ffffff",
            "border-color": "#e5e7eb",
            "color": "#1f2937"
        });
    });

    $("#dark-theme-btn").click(function () {
        $("body").css({
            "background-color": "#0f172a",
            "color": "#f8fafc"
        });
        $(".card").css({
            "background-color": "#1e293b",
            "border-color": "#334155",
            "color": "#f8fafc"
        });
    });

    // part 2:
    $("#hide-btn").click(function () {
        $("#about-details").hide(400);
    });

    $("#show-btn").click(function () {
        $("#about-details").show(400);
    });

    $("#toggle-btn").click(function () {
        $("#about-details").toggle(400);
    });

    $("#fade-in-btn").click(function () {
        $(".gallery-img").fadeIn(500);
    });

    $("#fade-out-btn").click(function () {
        $(".gallery-img").fadeOut(500);
    });

    $("#fade-toggle-btn").click(function () {
        $(".gallery-img").fadeToggle(500);
    });

    $(".slide-heading").click(function () {
        $(this).next(".slide-panel").slideToggle(350);
    });

    $("#slide-down-all-btn").click(function () {
        $(".slide-panel").slideDown(350);
    });

    $("#slide-up-all-btn").click(function () {
        $(".slide-panel").slideUp(350);
    });

    // part 3:
    $("#add-skill-btn").click(function () {
        var skill = $("#skill-input").val().trim();
        if (skill === "") {
            $("#skill-error").text("Please enter a skill before adding.");
            return;
        }
        $("#skill-error").text("");
        $("#skills-list").append($("<li></li>").text(skill));
        $("#skill-input").val("");
    });

    $("#prepend-skill-btn").click(function () {
        var skill = $("#skill-input").val().trim();
        if (skill === "") {
            $("#skill-error").text("Please enter a skill before prepending.");
            return;
        }
        $("#skill-error").text("");
        $("#skills-list").prepend($("<li></li>").text(skill));
        $("#skill-input").val("");
    });

    $("#remove-skill-btn").click(function () {
        $("#skill-error").text("");
        $("#skills-list li:last-child").remove();
    });

    var isGithub = true;
    $("#change-link-btn").click(function () {
        if (isGithub) {
            $("#social-link")
                .attr("href", "https://www.linkedin.com")
                .text("Visit My LinkedIn (https://www.linkedin.com)");
            isGithub = false;
        } else {
            $("#social-link")
                .attr("href", "https://github.com")
                .text("Visit My GitHub (https://github.com)");
            isGithub = true;
        }
    });

    $("#name-input").on("input", function () {
        var currentName = $(this).val();
        $("#live-name").text(currentName !== "" ? currentName : "Not entered yet");
    });

    $("#email-input").on("input", function () {
        var currentEmail = $(this).val();
        $("#live-email").text(currentEmail !== "" ? currentEmail : "Not entered yet");
    });

    // part 4:
    var skillsAnimated = false;
    $("#animate-skills-btn").click(function () {
        if (!skillsAnimated) {
            $("#bar-html").animate({ width: "90%" }, 700);
            $("#bar-js").animate({ width: "80%" }, 700);
            $("#bar-jquery").animate({ width: "85%" }, 700);
            $("#bar-git").animate({ width: "75%" }, 700);
            skillsAnimated = true;
        } else {
            $(".bar-fill").animate({ width: "0%" }, 700);
            skillsAnimated = false;
        }
    });
});

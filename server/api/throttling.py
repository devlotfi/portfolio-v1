from rest_framework.throttling import UserRateThrottle


class ContactThrottle(UserRateThrottle):
    rate = "100/day"
